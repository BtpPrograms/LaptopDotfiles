" Show Relative Line Numbers with number on current line by default
set relativenumber
set number

" Toggle Paste Mode
set pastetoggle=<s>

" Various Tab Related Options
set tabstop=4
set shiftwidth=4
set expandtab
set softtabstop=4

" Set Leader Key to , "
let mapleader=","

" Place line on current location of cursor "
set cursorline

" Set up column to match line length of 120
autocmd FileType python set colorcolumn=120

" Change background color of color column 
highlight ColorColumn ctermbg=241

" Change background color of fold
highlight Folded ctermbg=241

" Dvorak Keybindings
no d h
no h j
no t k
no n l
no s :
no S :
no j d
no l n
no L N

no - $
no _ ^
no N <C-w><C-w>
no T <C-w><C-r>
no H 8<Down>
no T 8<Up>
no D <C-w><C-r>

" Map keys to move between splits "
nnoremap <C-H> <C-W><C-J>
nnoremap <C-T> <C-W><C-K>
nnoremap <C-N> <C-W><C-L>
nnoremap <C-D> <C-W><C-H>

" Create toggle for relative line numbering "
function! NumberToggle()
    if(&relativenumber == 1)
        set norelativenumber
    else
        set relativenumber
    endif
endfunc

nnoremap <C-n> :call NumberToggle()<cr>
