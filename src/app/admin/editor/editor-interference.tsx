"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import { AppSidebar } from "./app-sidebar";
import { EditorDynamicComponent } from "./dynamic-editable-component";
import { generateUniqueId } from "./generateId";
import Footer from "@/components/ui/footer";
import HeroDefault from "@/components/ui/hero-all";

export default function EditorInterface({ selectedPage }) {
  const [pageData, setPageData] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    if (selectedPage) {
      async function fetchPageData() {
        const { data, error } = await supabase
          .from("pages")
          .select("*")
          .eq("slug", selectedPage)
          .single();
        if (error) {
          console.error("Error fetching page data:", error);
        } else {
          const dataWithIds = assignIdsToComponents(data.content);
          console.log("Initial page data:", dataWithIds);
          setPageData(dataWithIds);
          setPreviewData(dataWithIds); // Initialize preview data
        }
      }
      fetchPageData();
    }
  }, [selectedPage]);

  // Recursively assign IDs to components
  const assignIdsToComponents = (data) => {
    if (!data) return data;

    // Handle arrays
    if (Array.isArray(data)) {
      return data.map((item) => assignIdsToComponents(item));
    }

    // Handle objects (components)
    if (typeof data === "object") {
      const newData = {
        ...data,
        id: data.id || generateUniqueId(),
      };

      // Handle props and nested children
      if (newData.props) {
        newData.props = { ...newData.props };

        // Handle children in props
        if (newData.props.children) {
          if (Array.isArray(newData.props.children)) {
            newData.props.children = newData.props.children.map((child) => {
              if (typeof child === "object" && child !== null) {
                return assignIdsToComponents({
                  ...child,
                  id: child.id || generateUniqueId(),
                });
              }
              return child;
            });
          } else if (typeof newData.props.children === "object") {
            newData.props.children = assignIdsToComponents({
              ...newData.props.children,
              id: newData.props.children.id || generateUniqueId(),
            });
          }
        }

        // Handle description if it's a component
        if (
          newData.props.description &&
          typeof newData.props.description === "object"
        ) {
          newData.props.description = assignIdsToComponents({
            ...newData.props.description,
            id: newData.props.description.id || generateUniqueId(),
          });
        }
      }

      return newData;
    }

    return data;
  };

  // Handle final update (when saving to database)
  const handlePageDataUpdate = (newData) => {
    setPageData(newData);
    setPreviewData(newData);
  };

  // Handle local updates for preview
  const handleLocalUpdate = (newData) => {
    setPreviewData(newData);
  };

  // Handle component selection
  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="flex h-screen w-full">
        {/* Main Content Area */}
        <div className="w-full p-1 overflow-x-hidden">
          {/* Editor Area */}
          <div className="bg-white w-full shadow-lg">
            {previewData ? (
              <>
                <HeroDefault />
                <EditorDynamicComponent
                  data={previewData}
                  onComponentSelect={handleComponentSelect}
                  selectedComponent={selectedComponent}
                />
                <Footer />
              </>
            ) : (
              <div className="text-center text-gray-500 py-8">
                Select a page to start editing
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <AppSidebar
          pageData={pageData}
          selectedPage={selectedPage}
          onUpdate={handlePageDataUpdate}
          onLocalUpdate={handleLocalUpdate}
        />
      </div>
    </div>
  );
}
