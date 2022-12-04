/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting started with Cozie',
      items: [
        "home",
        "picking-a-fitbit",
        "installing-watchface",
        "extracting-data",
        "troubleshooting-cozie-basic",
        "example-of-experimental-method"
      ],
    },
    {
      type: 'category',
      label: 'Creating your own Cozie',
      items: [
        "app-creation-setup",
        "installation",
        "intro-fitbit-sdk",
        "change-questions",
        "change-settings",
        "uploading-to-appstore",
        "datatransfer-between-phone-and-fitbit",
        "interacting-with-gui-elements",
        "switching-between-screens",
        "gs-sending-data-to-cloud",
      ],
    },
    {
      type: 'category',
      label: 'Generating your Cozie - NEW',
      items: [
        "intro-generate-cozie",
        "add-questions",
        "question-flow-preview",
        "modify-questions",
        "json-file",
        "generate-cozie",
      ],
    },
  ],
};

module.exports = sidebars;