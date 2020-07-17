// Data Array 에 대해서 모든 정보가 true일 경우에 해당 값을 true로 반환하게 된다.
// Array 함수 중 every를 활용
var isAllTrues = function (datas, isCheckedCallback) {
    return datas.every(function (data) {
        return isCheckedCallback();
    });
};