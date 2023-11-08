import ActivityActor from '@/models/application/entities/ActivityActor';
import ActivityObject from '@/models/application/entities/ActivityObject';
import ActivityTarget from '@/models/application/entities/ActivityTarget';
import { ACTIVITY_VERBS } from '@/models/application/enums/ActivityEnums';

export default class Activity {
  actor: ActivityActor;

  object: ActivityObject;

  target?: ActivityTarget;

  verb: ACTIVITY_VERBS;

  constructor(actor: ActivityActor, verb: ACTIVITY_VERBS, object: ActivityObject, target?: ActivityTarget) {
    this.actor = actor;
    this.verb = verb;
    this.object = object;
    this.target = target;
  }
}
