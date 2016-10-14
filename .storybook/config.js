import { configure, addDecorator } from '@kadira/storybook';
import { ThemeProvider } from 'styled-components'
import React from 'react';
import '../src/index.css';

addDecorator((story) => (
  <ThemeProvider theme={{buttonColor: 'LightSkyBlue'}}>
    {story()}
  </ThemeProvider>
))

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
