import React from "react";
import TreeView from "./tree-view";

interface TreeViewItem {
  title: string;
  description?: string;
}

interface TreeViewListProps {
  items: TreeViewItem[];
}

export default function TreeViewList({ items }: TreeViewListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <TreeView
          key={index}
          title={item.title}
          description={item.description}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
