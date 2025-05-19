import React from 'react';

const AntiBriberyCorruption: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[#0a3d62]">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 w-3/5 h-full">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-[#0a3d62]/90"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Anti-Bribery and<br />Anti-Corruption Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-white/90">
              Our commitment to conducting business ethically and maintaining zero tolerance for bribery and corruption.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="prose max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">POLICY STATEMENT</h2>
            <p className="text-gray-600 leading-relaxed">
              Accord Innovations Sdn Bhd is committed to conducting business ethically and honestly and has zero tolerance for giving and receiving bribery and corrupt activities. We are committed in all business dealings and relationship and will constantly uphold all laws relating to anti-bribery and anti-corruption in Malaysia, in particular, the Malaysia Anti-Corruption Commission Act 2009.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">SCOPE OF POLICY</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The principles and obligations outlined in this policy apply to all employees of Accord Innovations Sdn Bhd, Board of Directors, and Accord Innovations Sdn Bhd's stakeholders, which include customers, vendors, agents, consultants, outsourced personnel and other representatives
            </p>
            <p className="text-gray-600 leading-relaxed">
              This policy sets forth Accord Innovations Sdn Bhd minimum compliance standards concerning interactions with third parties. However, where local law and regulations require more stringent controls, then such stricter controls must be followed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">DEFINITION OF BRIBERY</h2>
            <p className="text-gray-600 leading-relaxed">
              A bribe refers to "offering, promising, giving, receiving or soliciting of undue advantage of any value (which could be financial or non-financial), directly or indirectly, and irrespective of location(s), in violation of applicable law, as an inducement or reward for a person acting or refraining from acting in relation to the performance of that person's duties" as defined by the Anti Bribery Management System ISO 37001.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">SOLICITATION, BRIBERY AND CORRUPTION</h2>
            <p className="text-gray-600 leading-relaxed">
              Employees are prohibited from, directly or indirectly, soliciting, accepting or obtaining or agreeing to accept or attempting to obtain, from any party for themselves or for any other party, any bribe or gratification as an inducement or a reward for doing or forbearing to do, or for having done or forborne to do, any act in relation to Accord Innovations Sdn Bhd's affairs or business, or for showing favor or forbearing to show disfavor to any party in relation to Accord Innovations Sdn Bhd's' affairs or business.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">RECEIVING FACILITATION PAYMENTS</h2>
            <p className="text-gray-600 leading-relaxed">
              Employees are prohibited from, directly or indirectly, accepting or obtaining or attempting to accept or obtain facilitation payments from any person for themselves or for any other person subject to this policy. The term "facilitation payments" generally means payments made to secure or expedite the performance by a person performing a routine or administrative duty or function.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">PROHIBITION ON COMMISSIONS, DISCOUNTS AND SECRET PROFITS</h2>
            <p className="text-gray-600 leading-relaxed">
              Employees must not, directly or indirectly, receive or obtain, in respect of any goods or services purchased or other business transacted (whether or not by them) by or on behalf of Accord Innovations Sdn Bhd, any discount, rebate, commission, service, interest, consideration of value or other benefit or payments of any kind (whether in cash or in kind) which is not authorised by Accord Innovations Sdn Bhd's policies or procedures
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">RECEIVING GIFTS AND ENTERTAINMENT</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Accord Innovations Sdn Bhd prohibits both the giving and receiving of Gifts, Entertainment and Travel (GET) and Donation and Sponsorship (D&S) to influence business decisions. Employees must comply with all applicable policies, procedures, laws and regulations related to the use of GET in all countries in which the Accord Innovations operates
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Accord Innovations Sdn Bhd allows appropriate business-related GET. Reasonable GET are acceptable provided that the following guiding Principles are observed:
            </p>
            <div className="pl-4">
              <p className="text-gray-600 leading-relaxed mb-2"><strong>Principle 1: Transparency</strong> - You should be comfortable to disclose to your colleagues the GET and D&S that you offered/received.</p>
              <p className="text-gray-600 leading-relaxed mb-2"><strong>Principle 2: Recipients</strong> - You should only offer/accept GET and D&S to/from those who will not put you in a position of conflict.</p>
              <p className="text-gray-600 leading-relaxed mb-2"><strong>Principle 3: Ability to Influence</strong> - The GET and D&S must not be offered/accepted when there is a pending business decision.</p>
              <p className="text-gray-600 leading-relaxed mb-2"><strong>Principle 4: Value</strong> - The GET and D&S must be modest and must not be so frequent as to place the recipient under an obligation.</p>
              <p className="text-gray-600 leading-relaxed mb-2"><strong>Principle 5: Purpose</strong> - The intention behind the GET and D&S must not be interpreted as to gain unmerited advantage.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">POLITICAL CONTRIBUTIONS, SPONSORSHIPS AND DONATIONS</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">POLITICAL CONTRIBUTIONS</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accord Innovations Sdn Bhd does not make or offer monetary or in-kind political contributions to political parties, political party officials or candidates for political office.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">SPONSORSHIPS AND DONATIONS</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Employees must ensure that all sponsorships and donations are not used as a subterfuge for bribery or used to circumvent or avoid any of the provisions of the COE, including in particular, the prohibition on bribery.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In accordance with Accord Innovations Sdn Bhd's commitment to contribute to the community coupled with its values of integrity and transparency, all sponsorships and donations must comply with the following:
                </p>
                <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
                  <li>Ensure such contributions are allowed by applicable laws</li>
                  <li>Obtain all the necessary approval/authorisations</li>
                  <li>Be made to well-established entities with an adequate organisational structure to guarantee the proper administration of the funds</li>
                  <li>Be accurately stated in the company's accounting books and records</li>
                  <li>Not to be used as a means to cover up an undue payment or bribery</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">REPORTING OF A CONCERN AND WHISTLE-BLOWING</h2>
            <p className="text-gray-600 leading-relaxed">
              Recognizing the abovementioned values, Accord Innovations Sdn Bhd provides an avenue for all employees of Accord Innovations Sdn Bhd, members of the public and stakeholders to disclose any improper conduct within Accord Innovations Sdn Bhd
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AntiBriberyCorruption; 