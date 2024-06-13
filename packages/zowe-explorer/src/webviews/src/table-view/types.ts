
const tableColors = {
    "--ag-icon-font-family": "agGridQuartz",
    "--ag-row-hover-color": "var(--vscode-list-hoverBackground)",
    "--ag-range-selection-background-color": "var(--vscode-list-activeSelectionBackground)",
    "--ag-range-selection-highlight-color": "var(--vscode-list-activeSelectionForeground)",
    "--ag-background-color": "var(--vscode-editor-background)",
    "--ag-control-panel-background-color": "var(--vscode-editorWidget-background)",
    "--ag-border-color": "var(--vscode-editorWidget-border)",
    "--ag-header-background-color": "var(--vscode-keybindingTable-headerBackground)",
    "--ag-range-selection-border-color": "var(--vscode-tab-activeForeground)",
    "--ag-foreground-color": "var(--vscode-foreground)",
    "--ag-selected-row-background-color": "var(--vscode-notebook-selectedCellBackground)",
};

export const tableStyle = {
    height: 500,
    marginTop: "1em",
    ...tableColors
};