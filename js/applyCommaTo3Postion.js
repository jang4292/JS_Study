function applyCommaTo3Postion(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}