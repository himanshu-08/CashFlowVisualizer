import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next';

import AddNodePopup from './AddNodePopup';
import { IFormData, IShakeyProps } from "../../../Common/types";

import "./index.css";

type ISetData = Dispatch<SetStateAction<IShakeyProps["data"]>>

const SankeyEditor = ({ data, setData }: { data: IShakeyProps["data"], setData: ISetData }) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('')
  const { t } = useTranslation()

  const portal = useRef<any>(null);

  useEffect(() => {
    const portalEl = document.getElementById('portal');
    if (portalEl) {
      portal.current = portalEl;
    }
  }, [])

  const handleAddNode = (formData: IFormData) => {
    const newData = [
      ...data,
      [formData.from, formData.to, Number(formData.value)], // Adjusting 'Existing Node' with new pointer and weight as needed
    ];
    setData(newData);
    setOpenPopup(false);
    setSelectedNodeId('')
  };

  const handleNodeRemove = (nodeId: string) => {
    // Removing a node from the data
    const newData = data.filter(row => !row.includes(nodeId));
    setData(newData);
    setSelectedNodeId('')
  };

  return (
    <div>
      <select className='customSelect' value={selectedNodeId} onChange={e => setSelectedNodeId(e.target.value)}>
        {data.map(data => {
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