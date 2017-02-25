import React from 'react';
import update from "immutability-helper";
import BaseEditor from '../common/BaseEditor.jsx';
import VariantEditor from './VariantEditor.jsx';
import MetaEditor from './meta/index.jsx';
import { BlockFlagEditor, ItemFlagEditor, FlagCheckbox } from './FlagEditor.jsx';
import { Tabs, Tab } from "react-bootstrap";
export default function ItemEditor(props) {
    let {value, onChange} = props;
    return <Tabs id="tabs" defaultActiveKey={1} >
        <Tab eventKey={1} title="General">
            <h3>General</h3>
            <BaseEditor value={value} onChange={onChange} />
            <FlagCheckbox label="Technical item/block" value={value.technical} onChange={(v) => onChange(update(value, { technical: { $set: !value.technical } }))} />
            <FlagCheckbox label="Is Block" value={value.flags.isBlock} onChange={(v) => onChange(update(value, { flags: { isBlock: { $set: !value.flags.isBlock } } }))} />
        </Tab>
        <Tab eventKey={2} title="Metadata">
            <h3>Metadata</h3>
            <MetaEditor value={value} onChange={onChange} />
        </Tab>
        <Tab eventKey={3} title="Variants">
            <h3>Variants</h3>
            <VariantEditor value={Object.assign({ variants: [] }, value)} onChange={onChange} />
        </Tab>
        <Tab eventKey={4} title="Details">
            <h3>Flags</h3>
            <FlagCheckbox label="Is Block" value={value.flags.isBlock} onChange={(v) => onChange(update(value, { flags: { isBlock: { $set: !value.flags.isBlock } } }))} />
            <hr />
            {
                value.flags.isBlock ?
                    <BlockFlagEditor value={value.flags} onChange={(data) => onChange(Object.assign({}, value, { flags: data }))} />
                    :
                    <ItemFlagEditor value={value.flags} onChange={(data) => onChange(Object.assign({}, value, { flags: data }))} />
            }
        </Tab>
        <Tab eventKey={5} title="Raw data">
            <h3>Raw JSON</h3>
            <pre>{JSON.stringify(value, null, 2)}</pre>
        </Tab>

    </Tabs>
}

