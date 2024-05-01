class Figure {

    constructor(id, name, category, width, heigth, datas) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.width = width;
        this.heigth = heigth;
        this.datas = datas;
    }

    // setters
    setId(id) {
        this.id = id;
        return this;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setCategory(category) {
        this.category = category;
        return this;
    }

    setWidth(width) {
        this.width = width;
        return this;
    }

    setHeigth(heigth) {
        this.heigth = heigth;
        return this;
    }

    setDatas(datas) {
        this.datas = datas;
        return this;
    }

    // getters

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCategory() {
        return this.category;
    }

    getWidth() {
        return this.width;
    }

    getHeigth() {
        return this.heigth;
    }

    getDatas() {
        return this.datas;
    }
}