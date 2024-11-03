import { SubjectPreRequisites } from '../Domain/Entities/SubjectPreRequisites.entity';

export function SubjectPreRequisitesMap(
  SubjectRelationships,
): SubjectPreRequisites[] {
  let SubjectPreRequisites: SubjectPreRequisites[] = [];
  SubjectRelationships.forEach((relationship) => {
    const actualSubject = relationship.SubjectCode;
    const actualPreRequisite = relationship.PreSubjectCode;
    const foundSubject: SubjectPreRequisites = SubjectPreRequisites.find(
      (subject) => subject.SubjectCode == actualSubject,
    );
    if (!foundSubject) {
      const subject = {
        SubjectCode: actualSubject,
        PreRequisiteCodes: [actualPreRequisite],
      };
      SubjectPreRequisites.push(subject);
    } else {
      foundSubject.PreRequisiteCodes.push(actualPreRequisite);
    }
  });
  return SubjectPreRequisites;
}
