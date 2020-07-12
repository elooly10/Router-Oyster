
      function Convert(x, y) {
        if (typeof y === "function" || !typeof y) {
          String(x);
          var P = x.slice(0, 2);
          if (P === "o-") {
            console.log(12 + ":: " + x + ":; " + y());
          } else {
            console.log(13 + "::" + x);
          }
        }
      }

