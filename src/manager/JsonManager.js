class JsonManager {

    constructor(controller) {
        this.figuresData = {};
        this.figuresJsonPath = FIGURES_JSON_PATH;
        this.controller = controller;
    }

    async init() {
        await loadJSON(this.figuresJsonPath, this.setFiguresData.bind(this));
    }

    setFiguresData(figuresData) {
        //console.log('figures :', figuresData.figures);
        this.figuresData = figuresData;
        this.controller.model.setFigures(figuresData.figures);
    }

    getFiguresData() {
        return this.figuresData;
    }

    getFigures() {
        return this.figuresData.figures;
    }
}