{ pkgs }: {
    deps = [
      pkgs.ncurses.dev
      pkgs.gd
      pkgs.libev
      pkgs.gnuplot
    ];
}