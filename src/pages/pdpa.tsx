import React from 'react';

const PDPA: React.FC = () => {
  return (
    <div>
      <div className="relative h-96 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">
            Personal Data Protection Notice
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="prose max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">APPLICATION</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Act applies to— (a) any person who processes; and (b) any person who has control over or authorize the processing of, any personal data in respect of commercial transactions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Subject to subsection (1), this Act applies to a person in respect of personal data if— (a) the person is established in Malaysia and the personal data is processed, whether or not in the context of that establishment, by that person or any other person employed or engaged by that establishment; or (b) the person is not established in Malaysia, but uses equipment in Malaysia for processing the personal data otherwise than for the purposes of transit through Malaysia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Personal Data Protection Notice explains on how Accord Innovations uses your personal data.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Accord Innovations is fully committed to ensure that our processing of personal data complies with the Personal Data Protection Act 2010 (PDPA).
            </p>
            <p className="text-gray-600 leading-relaxed">
              This Notice relates to your personal data that you have voluntarily provided to Accord Innovations during your access to our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. PERSONAL DATA PROTECTION PRINCIPLES</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The processing of personal data by a data user shall be in compliance with the following Personal Data Protection Principles, namely:
            </p>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2 mb-4">
              <li>the General Principle;</li>
              <li>the Notice and Choice Principle;</li>
              <li>the Disclosure Principle;</li>
              <li>the Security Principle;</li>
              <li>the Retention Principle;</li>
              <li>the Data Integrity Principle;</li>
              <li>the Access Principle</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              A data user who contravenes subsection (1) commits an offence and shall, on conviction, be liable to a fine not exceeding three hundred thousand ringgit or to imprisonment for a term not exceeding two years or to both.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. GENERAL PRINCIPLE</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A data user shall not:
            </p>
            <div className="pl-4 mb-4">
              <p className="text-gray-600 leading-relaxed mb-2">1.0 in the case of personal data other than sensitive personal data, process personal data about a data subject unless the data subject has given his consent to the processing of the personal data; or</p>
              <p className="text-gray-600 leading-relaxed">1.1 in the case of sensitive personal data, process sensitive personal data about a data subject except in accordance with the provisions of section 40.</p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Notwithstanding paragraph (1) a data user may process personal data about a data subject if the processing is necessary—
            </p>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
              <li>for the performance of a contract to which the data subject is a party; or the taking of steps at the request of the data subject with a view to entering into a contract;</li>
              <li>for compliance with any legal obligation to which the data user is the subject, other than an obligation imposed by a contract;</li>
              <li>in order to protect the vital interests of the data subject;</li>
              <li>for the administration of justice;</li>
              <li>for the exercise of any functions conferred on any person by or under any law.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. NOTICE AND CHOICE PRINCIPLE</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A data user shall by written notice inform a data subject:
            </p>
            <div className="pl-4 space-y-2 mb-4">
              <p className="text-gray-600 leading-relaxed">1.0 that personal data of the data subject is being processed by or on behalf of the data user, and shall provide a description of the personal data to that data subject;</p>
              <p className="text-gray-600 leading-relaxed">1.1 the purposes for which the personal data is being or is to be collected and further processed;</p>
              <p className="text-gray-600 leading-relaxed">1.3 of the data subject's right to request access to and to request correction of the personal data and how to contact the data user with any inquiries or complaints in respect of the personal data;</p>
              <p className="text-gray-600 leading-relaxed">1.4 of the class of third parties to whom the data user discloses or may disclose the personal data;</p>
              <p className="text-gray-600 leading-relaxed">1.5 of the choices and means the data user offers the data subject for limiting the processing of personal data;</p>
              <p className="text-gray-600 leading-relaxed">1.6 whether it is obligatory or voluntary for the data subject to supply the personal data;</p>
              <p className="text-gray-600 leading-relaxed">1.7 where it is obligatory for the data subject to supply the personal data, the consequences for the data subject if he fails to supply the personal data.</p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The notice under subsection (1) shall be given as soon as practicable by the data user:
            </p>
            <div className="pl-4 space-y-2">
              <p className="text-gray-600 leading-relaxed">2.0 when the data subject is first asked by the data user to provide his personal data;</p>
              <p className="text-gray-600 leading-relaxed">2.1 when the data user first collects the personal data of the data subject;</p>
              <p className="text-gray-600 leading-relaxed">2.2 in any other case, before the data user—</p>
              <div className="pl-4">
                <p className="text-gray-600 leading-relaxed">2.2.1 uses the personal data of the data subject for a purpose other than the purpose for which the personal data was collected;</p>
                <p className="text-gray-600 leading-relaxed">2.2.2 discloses the personal data to a third party.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. SECURITY PRINCIPLE</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A data user shall, when processing personal data, take practical steps to protect the personal data from any loss, misuse, modification, unauthorized or accidental access or disclosure, alteration or destruction by having regard to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2 mb-4">
              <li>the nature of the personal data and the harm that would result from such loss, misuse, modification, unauthorized or accidental access or disclosure, alteration or destruction;</li>
              <li>the place or location where the personal data is stored;</li>
              <li>any security measures incorporated into any equipment in which the personal data is stored;</li>
              <li>the measures taken for ensuring the reliability, integrity and competence of personnel having access to the personal data;</li>
              <li>the measures taken for ensuring the secure transfer of the personal data.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. RETENTION PRINCIPLE</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              1. The personal data processed for any purpose shall not be kept longer than is necessary for the fulfilment of that purpose.
            </p>
            <p className="text-gray-600 leading-relaxed">
              2. It shall be the duty of a data user to take all reasonable steps to ensure that all personal data is destroyed or permanently deleted if it is no longer required for the purpose for which it was to be processed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. ACCESS PRINCIPLE</h2>
            <p className="text-gray-600 leading-relaxed">
              A data subject shall be given access to his personal data held by a data user and be able to correct that personal data where the personal data is inaccurate, incomplete, misleading or not up-to-date, except where compliance with a request to such access or correction is refused under this Act.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PDPA; 