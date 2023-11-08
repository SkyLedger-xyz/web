import { ACTIVITY_NAMES } from '@/models/application/enums/ActivityEnums';

export default class ActivityTarget {
  id: string | number;

  name: ACTIVITY_NAMES;

  constructor(id: string | number, name: ACTIVITY_NAMES) {
    this.id = id;
    this.name = name;
  }
}
