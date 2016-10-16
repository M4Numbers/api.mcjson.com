import React from 'react';
/**
Common mod/id form
mod is locked for now
*/

export function FlagCheckbox(props) {
    return <div className="form-group"><div className="checkbox">
        <label><input type="checkbox" checked={props.value} onChange={(ev) => { props.onChange(ev.target.checked ? true : undefined) } } /> {props.label}</label>
    </div></div>
}

export function FlagInt(props) {
    return <div className="form-group">
        <label>{props.label}: </label>
        <div className="input-group">
            <span className="input-group-addon">
                <input type="checkbox" onChange={(ev) => {
                    props.onChange(ev.target.checked ? 0 : undefined );
                } } checked={!(props.value == undefined)} />
            </span>
            <input className="form-control" readOnly={(props.value == undefined)} type="number" min="0" step="1" value={props.value} onChange={(ev) => props.onChange(parseInt(ev.target.value))}
                />
        </div>
    </div>
}

function toggleArray(arr, val){
    if(arr.indexOf(val) !== -1){
        let a = arr.slice();
        a.splice(arr.indexOf(val),1);
        return a;
    }else{
        return arr.concat([val]);
    }
}

export function BlockFlagEditor(props) {
    const update = (data)=>{
        props.onChange(Object.assign({}, props.data, data));
    }
    return <div className="block-flag">
        <FlagCheckbox label="Physics" value={props.data ? props.data.physics : false} onChange={ c => update({ physics: c }) } />
        <FlagInt label="Inventory slots" value={props.data ? props.data.inventory_slots : 0} onChange={ slots => update({ inventory_slots: slots }) } />
        <fieldset>
        <legend>NBT data editors</legend>
        <FlagCheckbox label="Shulker Colour picker" value={props.data && props.data.editors && props.data.editors.indexOf("SHULKER_BOX")!==-1} onChange={(v) => update( { editors: toggleArray(props.data.editors||[],"SHULKER_BOX") } ) } />
        
        </fieldset>

    </div>
}

export function ItemFlagEditor(props) {
    const update = (data)=>{
        props.onChange(Object.assign({}, props.data, data));
    }
    return <div className="block-flag">
        <FlagInt label="Durability" value={props.data ? props.data.durability : 0} onChange={ slots => update({ durability: slots }) } />
        <fieldset>
        <legend>NBT data editors</legend>
        <FlagCheckbox label="Potion Effects" value={props.data && props.data.nbt_potion} onChange={(v) => update( { nbt_potion: v } ) } />
        <FlagCheckbox label="Book Contents" value={props.data && props.data.nbt_book} onChange={(v) => update( { nbt_book: v } ) } />
        <FlagCheckbox label="Book Author" value={props.data && props.data.nbt_author} onChange={(v) => update( { nbt_author: v } ) } />
        <FlagCheckbox label="Banner" value={props.data && props.data.nbt_banner} onChange={(v) => update( { nbt_banner: v } ) } />
        <FlagCheckbox label="Firework" value={props.data && props.data.nbt_firework} onChange={(v) => update( { nbt_firework: v } ) } />
        </fieldset>

    </div>
}