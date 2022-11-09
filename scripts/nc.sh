#!/bin/sh

# get the file name from the cli's first argument
FILEPATH=$1

# warn if the FILE is not set
if [ -z "$FILEPATH" ]; then
    echo "No file specified"
    exit 1
fi

# create new react component file
# 1. create directory inside the "./components" directory if not exists
# 2. extract basename of the file path
# 3. change the file to kebab-case
# 4. extension is .tsx
# 5. create file

# save the target directory name to a variable
DIR=./components/$(dirname $FILEPATH)
mkdir -p $DIR
# save the kebab-case file name to a variable
FILE=$(basename $FILEPATH | sed -e 's/\([a-z]\)\([A-Z]\)/\1-\2/g' | tr '[:upper:]' '[:lower:]').tsx
touch $DIR/$FILE

# add boilerplate code to the created file
# 1. import FC type from the react library
# 2. declare export statement with a const react function component
# named with $FILEPATH
# 3. return a div with the text "Hello World" inside the component
# 4. create index.tsx file in the same directory
# 5. add export statement for the created component in the index.tsx file

echo "import { FC } from 'react';" >> $DIR/$FILE

# save the component name to a variable, it should be a PascalCase
COMPONENT=$(basename $FILE | sed -e 's/\([a-z]\)\([A-Z]\)/\1-\2/g' | tr '[:lower:]' '[:upper:]' | sed -e 's/-\([a-z]\)/\U\1/g' | sed -e 's/^\([a-z]\)/\U\1/g' | sed -e 's/\.tsx//g')

echo "export const $COMPONENT: FC = () => {" >> $DIR/$FILE
echo "  return <div>Hello World</div>;" >> $DIR/$FILE
echo "}" >> $DIR/$FILE

# create index.tsx file
touch $DIR/index.tsx
echo "export * from './$FILE';" >> $DIR/index.tsx
