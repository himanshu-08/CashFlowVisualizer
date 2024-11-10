import React from "react";
import * as d3 from "d3";
import { sankey, sankeyJustify, sankeyLinkHorizontal } from "d3-sankey";

const MARGIN_Y = 25;
const MARGIN_X = 5;
const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

type Data = {
  nodes: { name: string; category: string }[];
  links: { source: string; target: string; value: number }[];
};

type SankeyProps = {
  width: number;
  height: number;
  data: Data; //Todo: make type as Data
};

const Sankey = ({ width, height, data }: SankeyProps) => {
  const allGroups = [...new Set(data.nodes.map((d) => d.category))].sort();
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups as string[]).range(COLORS);

  // Set the sankey diagram properties
  const sankeyGenerator = sankey() // TODO: find how to type the sankey() function
    .nodeWidth(26)
    .nodePadding(10)
    .extent([
      [MARGIN_X, MARGIN_Y],
      [width - MARGIN_X, height - MARGIN_Y],
    ])
    .nodeId((node) => (node as  {name: string}).name) // Accessor function: how to retrieve the id that defines each node. This id is then used for the source and target props of links
    .nodeAlign(sankeyJustify); // Algorithm used to decide node position

  // Compute nodes and links positions
  const { nodes, links } = sankeyGenerator(data as any);

  //
  // Draw the nodes
  //
  const allNodes = nodes.map((node) => {
    return (
      <g key={node.index}>
        <rect
          height={node.y1 as number - node.y0! as number}
          width={sankeyGenerator.nodeWidth()}
          x={node.x0}
          y={node.y0}
          stroke={"black"}
          fill={colorScale((node as {category: string}).category)}
          fillOpacity={1}
          rx={0.9}
        />
      </g>
    );
  });

  //
  // Draw the links
  //
  const allLinks = links.map((link, i) => {
    const linkGenerator = sankeyLinkHorizontal();
    const path = linkGenerator(link) || undefined;

    return (
      <path
        key={i}
        d={path}
        stroke={colorScale((link.source as {category: string}).category)}
        fill="none"
        strokeOpacity={0.3}
        strokeWidth={link.width}
      />
    );
  });

  //
  // Draw the Labels
  //
  const allLabels = nodes.map((node, i) => {
    return (
      <text
        key={i}
        x={node.x0 as number < width / 2 ? node.x1 as number + 6 : node.x0 || 0 - 6}
        y={(node.y1 as number + node.y0! as number) / 2}
        dy="0.35rem"
        textAnchor={node.x0 as number < width / 2 ? "start" : "end"}
        fontSize={12}
      >
        {(node as {name: string}).name}
      </text>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allLinks}
        {allNodes}
        {allLabels}
      </svg>
    </div>
  );
};

export default Sankey