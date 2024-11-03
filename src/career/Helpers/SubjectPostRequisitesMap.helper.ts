import { SubjectPostRequisites } from '../Domain/Entities/SubjectPostRequisites.entity';

export function SubjectPostRequisitesMap(
  SubjectRelationships,
): SubjectPostRequisites[] {
  let SubjectPostRequisites: SubjectPostRequisites[] = [];
  SubjectRelationships.forEach((relationship) => {
    const actualSubject = relationship.PreSubjectCode;
    const actualPostRequisite = relationship.SubjectCode;
    const foundSubject: SubjectPostRequisites = SubjectPostRequisites.find(
      (subject) => subject.SubjectCode == actualSubject,
    );
    if (!foundSubject) {
      const subject = {
        SubjectCode: actualSubject,
        PostRequisiteCodes: [actualPostRequisite],
      };
      SubjectPostRequisites.push(subject);
    } else {
      foundSubject.PostRequisiteCodes.push(actualPostRequisite);
    }
  });
  return SubjectPostRequisites;
}
