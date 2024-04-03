import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

import config from "../config/config";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { CustomButton, Tab } from "../components";
import { AiPicker,ColorPicker,FilePicker} from '../components/index'



export default function Customaizer() {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatinImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker  />;
      case "aipicker":
        return (
          <AiPicker />
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((item) => {
                  return (
                    <Tab
                      key={item.name}
                      tab={item}
                      handleClick={() => setActiveEditorTab(item.name)}
                    />
                  );
                })}
               
                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5 "
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((item) => {
              return (
                <Tab
                  isFilterTab
                  isActiveTab=""
                  key={item.name}
                  tab={item}
                  handleClick={() => {}}
                />
              );
            })}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
