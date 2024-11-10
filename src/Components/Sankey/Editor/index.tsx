import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import AddNodePopup from './AddNodePopup';
import { IFormData, IRootstate, IShakeyProps } from "../../../Common/types";
import { addNewNode, removeNode } from '../../../Redux/features/cashFlowreducer';

import "./index.css";

type ISetData = Dispatch<SetStateAction<IShakeyProps["data"]>>

const SankeyEditor = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('')
  const { t } = useTranslation()

  const cashflowData = useSelector<IRootstate, IShakeyProps>(state => state.cashFlowreducer)
  const dispatch = useDispatch();
  const {data} = cashflowData

  const portal = useRef<any>(null);

  useEffect(() => {
    const portalEl = document.getElementById('portal');
    if (portalEl) {
      portal.current = portalEl;
    }
  }, [])

  useEffect(() => {
    if(data.length>1){
      const firstNode = cashflowData.data[1];
      setSelectedNodeId(String(firstNode[1]))
    }
  }, [data])

  const handleAddNode = (formData: IFormData) => {
    dispatch(addNewNode([formData.from, formData.to, Number(formData.value)]))
    setOpenPopup(false);
    setSelectedNodeId('')
  };

  const handleNodeRemove = (nodeId: string) => {
    // Removing a node from the data
    dispatch(removeNode(nodeId))
    setSelectedNodeId('')
  };

  return (
    <div>
      <select className='customSelect' value={selectedNodeId} onChange={e => setSelectedNodeId(e.target.value)}>
        {data?.slice(1)?.map((data) => {
          return <option key={data[1]}>{data[1]}</option>
        })}
      </select>

      {/* UI elements for editing nodes */}
      <button className={openPopup ? 'selected' : ''} disabled={!selectedNodeId} onClick={() => setOpenPopup(!openPopup)}>{t("addNode")}</button>
      <button disabled={!selectedNodeId} onClick={() => handleNodeRemove(selectedNodeId)}>{t("removeNode")}</button>

      {/* Pop-up for adding new nodes */}
      {openPopup &&
        portal.current && createPortal(
          <AddNodePopup selectedValue={selectedNodeId} onSubmit={handleAddNode} />,
          portal.current
        )}
    </div>
  );
}

export default SankeyEditor