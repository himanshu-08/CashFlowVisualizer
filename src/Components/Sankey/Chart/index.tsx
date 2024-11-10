import React, { useState } from "react";
import Chart from "react-google-charts";
import { useTranslation } from "react-i18next";

import SankeyEditor from "../Editor";
import { IShakeyProps } from "../../../Common/types";

import "./index.css";

const Content = ({ data: sankeyData, options }: IShakeyProps) => {
    const [data, setData] = useState<IShakeyProps["data"]>(sankeyData);
    const { t } = useTranslation()

    return (
        <div className="cashFlowContainer">
            <div>
                <Chart
                    width={'700px'}
                    height={'400px'}
                    chartType="Sankey"
                    loader={<div>Loading Chart...</div>}
                    data={data}
                    options={options}
                    rootProps={{ 'aria-label': 'A Sankey diagram showing cash flow' }}
                />
            </div>
            <div>
                <h2>{t("cashFlow")}</h2>
                <SankeyEditor data={data} setData={setData} />
            </div>
        </div>
    )
}

export default Content