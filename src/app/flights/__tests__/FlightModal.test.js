import React from 'react';
import { shallow } from 'enzyme';
import FlightModal from '../FlightModal';
import RootTest from '../../RootTest';

it('FlightModal renders without crashing', () => {
    shallow(
        <RootTest>
            <FlightModal flight={{}} showDialog={true} onClose={() => { }} />
        </RootTest>
    );
});