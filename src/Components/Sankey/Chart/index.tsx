import React, { useState } from "react";
import Chart from "react-google-charts";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import SankeyEditor from "../Editor";

import "./index.css";
import { IRootstate, IShakeyProps } from "../../../Common/types";

const Content = () => {
    const { t } = useTranslation();

    const cashflowData = useSelector<IRootstate, IShakeyProps>(state => state.cashFlowreducer)

    const {data, options} = cashflowData;

    return (
        <div className="cashFlowContainer">
            <div>
                {data.length>1 && <Chart
                    width={'700px'}
                    height={'400px'}
                    chartType="Sankey"
                    loader={<div>Loading Chart...</div>}
                    data={data}
                    options={options}
                    rootProps={{ 'aria-label': 'A Sankey diagram showing cash flow' }}
                />}
            </div>
            <div>
                <h2>{t("cashFlow")}</h2>
                <SankeyEditor />
            </div>
        </div>
    )
}

export default Content