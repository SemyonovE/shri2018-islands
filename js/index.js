(function (root) {
    var count = root.SHRI_ISLANDS.solution(root.SHRI_ISLANDS.MAP);

    document.querySelector('.outer').appendChild(
        root.SHRI_ISLANDS.render(root.SHRI_ISLANDS.MAP, count)
    );

    setTimeout(function() {
      root.SHRI_ISLANDS.count = 0;

      root.SHRI_ISLANDS.timerId = setInterval(function() {
          root.SHRI_ISLANDS.visualizeSolution();
          document.querySelector('.map').remove();
          document.querySelector('.outer').appendChild(
            root.SHRI_ISLANDS.render(root.SHRI_ISLANDS.MAP, root.SHRI_ISLANDS.count)
          );
      }, 500);
      
    }, 2000);
})(this);
