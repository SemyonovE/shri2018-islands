(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;
    var ISLAND_DELETED = root.SHRI_ISLANDS.ISLAND_DELETED;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        var tempMap = map.slice();
        var count = 0;

        root.SHRI_ISLANDS.deleteIsland = function me(x, y) {
          var map = root.SHRI_ISLANDS.MAP,
              row = map[y];

          row[x] = ISLAND_DELETED;

          if (x > 0 && map[y][x - 1] == ISLAND) me(x - 1, y);
          if (y > 0 && map[y - 1][x] == ISLAND) me(x, y - 1);
          if (x < row.length && map[y][x + 1] == ISLAND) me(x + 1, y);
          if (y < map.length - 1 && map[y + 1][x] == ISLAND) me(x, y + 1);
        };

        for (y = 0; y < map.length; y++) {
            row = map[y];

            for (x = 0; x < row.length; x++) {

                if (row[x] == ISLAND && ++count) root.SHRI_ISLANDS.deleteIsland(x, y);
            }
        }

        root.SHRI_ISLANDS.MAP = tempMap;

        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
