import React from 'react';
import { motion } from 'framer-motion';

export const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary-900">
            How We Work: Our Partnership Framework
          </h1>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-800">
              1. Positioning Clarity <span className="text-secondary-500 font-normal text-xl">(Critical Priority)</span>
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">Gap Identified:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Partners frequently asked "what exactly do you do?"</li>
                <li>Our value proposition wasn't distilled enough.</li>
              </ul>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Solution:</h3>
              <p className="mb-4 font-medium">➡️ Adopt simple tiered positioning:</p>
              
              <ul className="space-y-4 mb-6">
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Small to Mid-Sized Business (SMB):</span> 
                  <p>"Applied AI-in-a-box" (pre-built AI with light customization).</p>
                </li>
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Mid-Market:</span> 
                  <p>"AI Roadmaps + Applied AI Implementation."</p>
                </li>
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Enterprise:</span> 
                  <p>"Custom Agentic AI Infrastructure & Strategic Advisory."</p>
                </li>
              </ul>
              
              <div className="bg-primary-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Quick Elevator Pitch:</h4>
                <p className="italic">
                  "Flywheel AI Partners builds enterprise-grade AI systems that simplify operations, accelerate growth, and unlock new efficiencies. We deliver practical AI — tailored to your roadmap — not just theoretical transformation."
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-800">
              2. Pre-Qualification Framework for Sales Teams
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">Gap Identified:</h3>
              <p>Sales teams are securing meetings but not qualifying deeply.</p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Solution:</h3>
              <p className="mb-4 font-medium">➡️ Introduce a lightweight 5-question qualification checklist:</p>
              
              <ol className="list-decimal pl-6 space-y-3">
                <li><span className="font-medium">Size:</span> 50+ employees or $25M+ revenue?</li>
                <li><span className="font-medium">Urgency:</span> "We know we need AI" vs "We want to learn about AI"?</li>
                <li><span className="font-medium">Pain Point:</span> Clear business challenge surfaced?</li>
                <li><span className="font-medium">Budget Consciousness:</span> Any preliminary budget awareness?</li>
                <li><span className="font-medium">Department Targeted:</span> Ops, Finance, CX, IT, etc.?</li>
              </ol>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-800">
              3. Revenue Model + Engagement Structure
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">Gap Identified:</h3>
              <p>Potential partners want to understand: "How do we all make money together?"</p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Solution:</h3>
              <p className="mb-4 font-medium">➡️ Two primary paths:</p>
              
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Transactional Commission:</span> 
                  <p>When Flywheel refers a vendor.</p>
                </li>
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Service Revenue:</span> 
                  <p>When Flywheel sells advisory or builds internal solutions.</p>
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-800">
              4. Internal Enablement Tools
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">Gap Identified:</h3>
              <p>Sales teams need lightweight, clear tools to pitch Flywheel.</p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Solution:</h3>
              <p className="mb-4 font-medium">➡️ Develop a "Sales Kit":</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>One-Pager "Who We Are and What We Solve."</li>
                <li>FAQ Cheat Sheet.</li>
                <li>Discovery Questions Cheat Sheet.</li>
                <li>Engagement Pathway Visual.</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-800">
              5. Role Clarification
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">Gap Identified:</h3>
              <p>Partners ask: "Are you just advisors or do you deploy?"</p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Solution:</h3>
              <p className="mb-4 font-medium">➡️ Define a simple, phased model:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-primary-100">
                      <th className="py-3 px-4 text-left border-b">Phase</th>
                      <th className="py-3 px-4 text-left border-b">Flywheel Role</th>
                      <th className="py-3 px-4 text-left border-b">Revenue Model</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Phase 1: Initial Discovery</td>
                      <td className="py-3 px-4 border-b">First call, needs scoping</td>
                      <td className="py-3 px-4 border-b">Free</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b font-medium">Phase 2: Deep Dive Discovery</td>
                      <td className="py-3 px-4 border-b">Workshops, needs mapping</td>
                      <td className="py-3 px-4 border-b">Paid</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">Phase 3: Roadmap + SOW Design</td>
                      <td className="py-3 px-4 border-b">Custom AI strategy</td>
                      <td className="py-3 px-4 border-b">Paid</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b font-medium">Phase 4: Deployment</td>
                      <td className="py-3 px-4 border-b">Build solutions</td>
                      <td className="py-3 px-4 border-b">Paid milestone or fixed fee</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Phase 5: Vendor Management</td>
                      <td className="py-3 px-4">Manage execution partners</td>
                      <td className="py-3 px-4">Optional, success fee or project fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-800">
              6. Lead Segmentation Strategy
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">Gap Identified:</h3>
              <p>All meetings were being treated equally.</p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Solution:</h3>
              <p className="mb-4 font-medium">➡️ Introduce tiering:</p>
              
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Tier 1:</span> 
                  <p>Strategic enterprise and high-growth mid-market (Full Flywheel engagement).</p>
                </li>
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Tier 2:</span> 
                  <p>Mid-market scaling businesses (Discovery + Selective Build).</p>
                </li>
                <li className="bg-white p-4 rounded shadow-sm">
                  <span className="font-semibold">Tier 3:</span> 
                  <p>SMBs (Pre-built AI packages or partner referrals).</p>
                </li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-800">
              Immediate Next Steps
            </h2>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>Build First Call Kit.</li>
              <li>Finalize the Engagement Framework.</li>
              <li>Create Mini Proposals templates.</li>
              <li>Host an Enablement Workshop with sellers.</li>
              <li>Launch first Pilot Engagements with select leads to model success.</li>
            </ul>
            
            <p className="mt-8 text-sm text-gray-500 italic">
              Prepared for internal team use. Flywheel strategic collaboration alignment draft.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}; 