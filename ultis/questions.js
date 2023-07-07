

const prompt= [
  {
    type: 'input',
    name: 'clientName',
    message: 'Enter the client name:',
  },
  {
    type: 'input',
    name: 'clientGuardian',
    message: 'Enter the client guardian:',
  },
  {
    type: 'input',
    name: 'date',
    message: 'Enter the session date:',
  },
  {
    type: 'input',
    name: 'sessionLength',
    message: 'Enter the session length in minutes:',
  },
  {
    type: 'input',
    name: 'homeFunctioning',
    message: 'Enter the client\'s functioning at home since last seen:',
  },
  {
    type: 'input',
    name: 'schoolFunctioning',
    message: 'Enter the client\'s functioning at school since last seen:',
  },
  {
    type: 'input',
    name: 'clientSchoolStatus',
    message: 'Enter the client\'s school status:',
  },
  {
    type: 'input',
    name: 'todaysObservation',
    message: 'Enter the observations for today\'s session:',
  },
  {
    type: 'input',
    name: 'issuesAddressedToday',
    message: 'Enter the issues addressed today:',
  },
  {
    type: 'checkbox',
    name: 'workedOnActivities',
    message: 'Select the activities worked on today:',
    choices: [
      'accepting alternatives',
      'compliance targets',
      'daily living skills',
      'following instructions',
      'imitation',
      'reading comprehension',
      'intraverbals (conversation skills)',
      'mands (requests)',
      'match to sample',
      'play skills',
      'social skills',
      'tact’s (labels)',
      'waiting',
      'writing',
    ],
  },
  {
    type: 'input',
    name: 'goodBehavior',
    message: 'Enter the instances of good behavior observed:',
  },
  {
    type: 'input',
    name: 'needAssistantBehavior',
    message: 'Enter the instances where assistance was needed:',
  },
  {
    type: 'checkbox',
    name: 'problemBehavior',
    message: 'Select the problem behaviors exhibited:',
    choices: [
      'adverse stimuli',
      'denied access',
      'divided attention',
      'lack of attention',
      'playing',
      'removal of an item',
      'task demands',
    ],
  },
  {
    type: 'input',
    name: 'ABC',
    message: 'name one behavior the client engaged in'
  },
  {
    type: 'input',
    name: 'RBTName',
    message: 'Enter the name of the Registered Behavior Technician:',
  },
]



module.exports = {prompt}