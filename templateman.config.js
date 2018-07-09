/**
 * Templateman configuration file
 * @see https://www.npmjs.com/package/templateman
 * @type {{templates: *[]}} - Templateman options
 */

module.exports = {
  templates: [
    {
      name: 'React Function',
      files: [
        {
          from: './src/templates/react-func.js.tm',
          to: './src/components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './src/templates/stylus-file.styl.tm',
          to: './src/components/${TM:COMPONENT_NAME}/style.styl',
        },
      ],
    },
    {
      name: 'React Class',
      files: [
        {
          from: './src/templates/react-class.js.tm',
          to: './src/components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './src/templates/stylus-file.styl.tm',
          to: './src/components/${TM:COMPONENT_NAME}/style.styl',
        },
      ],
    },
    {
      name: 'React Connected Class',
      files: [
        {
          from: './src/templates/react-connected-class.js.tm',
          to: './src/components/${TM:COMPONENT_NAME}/index.js',
        },
        {
          from: './src/templates/stylus-file.styl.tm',
          to: './src/components/${TM:COMPONENT_NAME}/style.styl',
        },
      ],
    },
    {
      name: 'React Page',
      files: [
        {
          from: './src/templates/react-page.js.tm',
          to: './src/pages/${TM:COMPONENT_NAME}/index.js',
        },
      ],
    },
    {
      name: 'Redux Duck Module',
      files: {
        from: './src/templates/redux-duck.js.tm',
        to: './src/store/modules/${TM:DUCK_NAME}.js',
      },
    },
    {
      name: 'React Function (separate)',
      files: {
        from: './src/templates/react-func.js.tm',
        to: './src/components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
      },
    },
    {
      name: 'React Class (separate)',
      files: {
        from: './src/templates/react-class.js.tm',
        to: './src/components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
      },
    },
    {
      name: 'React Connected class (separate)',
      files: {
        from: './src/templates/react-connected-class.js.tm',
        to: './src/components/${TM:PARENT_COMPONENT_NAME}/${TM:COMPONENT_NAME}.js',
      },
    },
  ],
};
