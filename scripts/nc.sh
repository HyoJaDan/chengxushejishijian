#!/bin/sh

# get the file name from the cli's first argument
FILEPATH=$1

# warn if the FILE is not set
if [ -z "$FILEPATH" ]; then
    echo "No file specified"
    exit 1
fi

# get the directory path from FILEPATH prefixed with a app/components/
DIRPATH=./app/components/$FILEPATH

# create a directory if not exists
if [ ! -d "$DIRPATH" ]; then
    mkdir -p "$DIRPATH"
fi

# get the file name and append .tsx to it
FILEBASE=$(basename "$FILEPATH")
FILENAME=$FILEBASE.tsx

# change base of FILEPATH from kebab-case to PascalCase 
COMPONENT=$(echo "$FILEBASE" | gsed -E 's/(^|-)([a-zA-Z0-9])/\U\2/g')

# create a file in DIRPATH
touch "$DIRPATH/$FILENAME"

echo "import type { FC } from 'react';

export const $COMPONENT: FC = () => {
  return (
    <div>
      hello world
    </div>
  );
};" >> "$DIRPATH/$FILENAME"

# create a index.tsx in DIRPATH
INDEXFILE=$DIRPATH/index.tsx
touch "$INDEXFILE"

echo "export { ${COMPONENT} } from './${FILEBASE}';" >> "$INDEXFILE"