#!/bin/sh
#
# ~/.xinitrc
#
# Executed by startx (run your window manager from here)

if [ -d /etc/X11/xinit/xinitrc.d ]; then
  for f in /etc/X11/xinit/xinitrc.d/*; do
    [ -x "$f" ] && . "$f"
  done
  unset f
fi

# Loads terminal colors
xrdb ~/.Xresources

# Disable pc speaker beeing
xset -b

# Sets key repeat rate
xset r rate 200 20
xset s off -dpms
xset s off
setxkbmap us -option caps:swapescape

# Set desktop background
feh --bg-scale '/home/benny/Wallpapers/CloudyMountains.png'

# Disable PC Speaker
xset -b

# Set clipboards to synchronize
autocutsel -fork &
autocutsel -selection PRIMARY -fork &

# Runs background image script
sh ~/.fehbg

# Starts bspwm
sxhkd &
setxkbmap dvp -option caps:swapescape &
exec bspwm


