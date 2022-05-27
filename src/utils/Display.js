import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const setHeight = h => (height / 100) * h;
const setWidht = w => (width / 100) * w;

export default {setHeight, setWidht};
