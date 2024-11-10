import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next';

import AddForm from './AddForm';

import { IShakeyProps } from "../../../Utilities/data"
import "./index.css"

const SankeyEditor = ({ data, setData }: { data: IShakeyProps["data"], setData: Dispatch<SetStateAction<any[]>> }) => {
  const [isAdd, setIsAdd] = useState<Boolean>(false);
  const [selectedNodeId, setSelectedNodeId] = useState('')
  const { t } = useTranslation()

  const portal = useRef<any>(null);

  useEffect(() => {
    const portalEl = document.getElementById('portal');
    if (portalEl) {
      portal.current = portalEl;
    }
  }, [])

  const handleAddNode = (formData: any) => {
    const newData = [
      ...data,
      [formData.from, formData.to, Number(formData.value)], // Adjust the 'Existing Node' and weight as needed
    ];
    setData(newData);
    setIsAdd(false);
    setSelectedNodeId('')
  };

  const handleNodeRemove = (nodeId: string) => {
    // Remove a node from the data
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
      {/* UI elements for editing data */}
      <button className={isAdd ? 'selected' : ''} disabled={!selectedNodeId} onClick={() => setIsAdd(!isAdd)}>{t("addNode")}</button>
      <button disabled={!selectedNodeId} onClick={() => handleNodeRemove(selectedNodeId)}>{t("removeNode")}</button>

      {isAdd &&
        portal.current && createPortal(
          <AddForm selectedValue={selectedNodeId} onSubmit={handleAddNode} />,
          portal.current
        )}
    </div>
  );
}

export default SankeyEditor