def seatsInTheater(nCols, nRows, col, row):
    cols_behind = nCols - (col-1)
    rows_behind = nRows - (row)
    
    return cols_behind * rows_behind
    