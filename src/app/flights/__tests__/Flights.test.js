import React from 'react';
import { shallow } from 'enzyme';
import Flights from '../Flights';
import RootTest from '../../RootTest';

it('Flights renders without crashing', () => {
    shallow(
        <RootTest>
            <Flights />
        </RootTest>
    );
});