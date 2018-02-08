(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution() {
        // todo: визуализировать работу алгоритма
        var map = root.SHRI_ISLANDS.MAP;

        for (y = 0; y < map.length; y++) {
            row = map[y];

            for (x = 0; x < row.length; x++) {

                if (row[x] == ISLAND && ++root.SHRI_ISLANDS.count) {
                  root.SHRI_ISLANDS.deleteIsland(x, y);
                  return;
                }
            }
        }

        clearInterval(root.SHRI_ISLANDS.timerId);
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
