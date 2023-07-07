
function template(data) {
    return `${data.clientName}, accompanied by their ${data.clientGuardian}, was seen on ${data.date} for treatment of language and behavior for a session of ${data.sessionLength} minutes duration. ${data.clientName} is diagnosed with autism spectrum disorder. UPDATE SINCE LAST VISIT: Home functioning: Since last seen, ${data.clientName}’s functioning at home has been ${data.homeFunctioning}. School functioning: Since last seen, ${data.clientName}’s functioning at school has been ${data.schoolFunctioning} - ${data.clientSchoolStatus}. PROBLEMS ADDRESSED AND BEHAVIORAL OBSERVATIONS: Today, ${data.clientName} was observed ${data.todaysObservation} throughout their session. Issues addressed today include ${data.issuesAddressedToday}. Today we worked on language skills and acquisition programs in the form of ${data.workedOnActivities}. the client engaged in ${data.ABC} ${data.clientName} did well with ${data.goodBehavior}. ${data.clientName} needed assistance with ${data.needAssistantBehavior}. Problem behaviors she exhibited were ${data.problemBehavior}. We worked on decreasing inappropriate behaviors by using antecedent manipulations behavioral momentum, blocking, contracting, differential reinforcement, ignoring, over-correction, Premack principle (first then), prompting the correct response, prompting to clean up items thrown, prompting to complete task demand, redirecting, representing task demand until complies without problem behavior, response cost and time out. Today, antecedents to problem behavior were ${data.problemBehavior}. We worked on decreasing inappropriate behaviors by using antecedent manipulations, behavioral momentum, blocking, contracting, differential reinforcement, Premack principle (first then), prompting the correct response, prompting to complete task demand, redirecting, and representing task demand until complies without problem behavior. Compliance: Good. TREATMENT PROGRESS: ${data.clientName}’s progress toward treatment goal is slow. We will continue with the current targets. PLAN: There is a need for continued treatment, and the next session's goals will be to continue to work on the treatment plan goals. A follow-up appointment has been scheduled. SUPERVISION/STAFF TRAINING: Today's session was conducted by ${data.RBTName}. Registered Behavior Technician`;
  }
  
  module.exports = template;
  





