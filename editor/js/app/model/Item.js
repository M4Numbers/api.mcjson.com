import BaseMetaModel from './BaseMetaModel';

export default class Item extends BaseMetaModel {
	constructor(attr){
		super(attr,{
			urlRoot: '/v1/items/'
		});
	}

}