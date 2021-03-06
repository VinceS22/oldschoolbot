import itemID from '../../../../util/itemID';
import { Fletchable } from '../../../types';
import { transformStringBankToNum } from '../../../../util/transformStringBankToNum';

const Shafts: Fletchable[] = [
	{
		name: 'Arrow shaft',
		id: itemID('Arrow shaft'),
		level: 1,
		xp: 5,
		inputItems: transformStringBankToNum({ Logs: 1 }),
		tickRate: 2,
		outputMultiple: 15
	},
	{
		name: 'Javelin shaft',
		id: itemID('Javelin shaft'),
		level: 3,
		xp: 5,
		inputItems: transformStringBankToNum({ Logs: 1 }),
		tickRate: 2,
		outputMultiple: 15
	},
	{
		name: 'Oak arrow shaft',
		id: itemID('Arrow shaft'),
		level: 15,
		xp: 10,
		inputItems: transformStringBankToNum({ 'Oak logs': 1 }),
		tickRate: 2,
		outputMultiple: 30
	},
	{
		name: 'Willow arrow shaft',
		id: itemID('Arrow shaft'),
		level: 30,
		xp: 15,
		inputItems: transformStringBankToNum({ 'Willow logs': 1 }),
		tickRate: 2,
		outputMultiple: 45
	},
	{
		name: 'Maple arrow shaft',
		id: itemID('Arrow shaft'),
		level: 45,
		xp: 20,
		inputItems: transformStringBankToNum({ 'Maple logs': 1 }),
		tickRate: 2,
		outputMultiple: 60
	},
	{
		name: 'Yew arrow shaft',
		id: itemID('Arrow shaft'),
		level: 60,
		xp: 25,
		inputItems: transformStringBankToNum({ 'Yew logs': 1 }),
		tickRate: 2,
		outputMultiple: 75
	},
	{
		name: 'Magic arrow shaft',
		id: itemID('Arrow shaft'),
		level: 75,
		xp: 30,
		inputItems: transformStringBankToNum({ 'Magic logs': 1 }),
		tickRate: 2,
		outputMultiple: 90
	},
	{
		name: 'Redwood arrow shaft',
		id: itemID('Arrow shaft'),
		level: 90,
		xp: 35,
		inputItems: transformStringBankToNum({ 'Redwood logs': 1 }),
		tickRate: 2,
		outputMultiple: 105
	}
];

export default Shafts;
