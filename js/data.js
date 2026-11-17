// js/data.js - Central Configuration & Content Management

const CLINIC_DATA = {
  name: "Physio Boss",
  tagline: "Advanced Physiotherapy & Rehabilitation Center",
  phoneDisplay: "+91 84895 20463",
  phoneRaw: "918489520463", // Used for WhatsApp & tel: links
  email: "care@physioboss.com",
  address: "No 7, Dhanalakshmi Nagar Extension, New Siddhapudhur, Coimbatore - 641044",
  hours: "Mon – Sat: 9:00 AM – 8:30 PM | Sun: By Appointment",
  experienceYears: "15+",

  // 9 Core Physiotherapy Services
  services: [
    {
      id: "manual-therapy",
      title: "Manual Therapy",
      category: "Ortho",
      duration: "45 Mins",
      shortDesc: "Hands-on joint mobilization and soft tissue manipulation to reduce stiffness and restore natural movement.",
      highlights: ["Joint Mobilization", "Myofascial Release", "Trigger Point Therapy"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sports-injury",
      title: "Sports Injury Rehabilitation",
      category: "Sports",
      duration: "60 Mins",
      shortDesc: "Targeted recovery protocols for ligament tears, muscle strains, ACL rehab, and return-to-sport conditioning.",
      highlights: ["ACL & Meniscus Rehab", "Kinesio Taping", "Agility Conditioning"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "spondylitis-care",
      title: "Cervical & Lumbar Spondylitis",
      category: "Spine",
      duration: "45 Mins",
      shortDesc: "Decompression, postural correction, and ergonomic therapy for chronic neck and lower back radiating pain.",
      highlights: ["Cervical Traction", "Core Stabilization", "Ergonomic Coaching"],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "frozen-shoulder",
      title: "Frozen Shoulder Therapy",
      category: "Ortho",
      duration: "45 Mins",
      shortDesc: "Progressive capsular stretching and electrotherapy to eliminate shoulder pain and regain full overhead reach.",
      highlights: ["Capsular Stretching", "Ultrasound Therapy", "Rotator Cuff Strengthening"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "neuro-rehab",
      title: "Stroke & Neuro Rehabilitation",
      category: "Neuro",
      duration: "60 Mins",
      shortDesc: "Neuro-developmental therapy focused on balance training, gait re-education, and motor recovery after stroke.",
      highlights: ["Gait Re-education", "Balance & Coordination", "Neuro-muscular Re-training"],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "post-surgery",
      title: "Post-Surgery Ortho Rehab",
      category: "Ortho",
      duration: "50 Mins",
      shortDesc: "Structured rehabilitation following Total Knee Replacement (TKR), hip replacement, or fracture fixation.",
      highlights: ["TKR / THR Recovery", "Scar Tissue Mobilization", "Strength Restoration"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "disc-prolapse",
      title: "Spine & Disc Prolapse Care",
      category: "Spine",
      duration: "45 Mins",
      shortDesc: "Non-surgical management of slip disc, sciatica, and nerve root compression using McKenzie spine protocols.",
      highlights: ["Sciatica Relief", "McKenzie Extension", "Spinal Decompression"],
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "electro-therapy",
      title: "Advanced Electrotherapy (IFT / TENS)",
      category: "Ortho",
      duration: "30 Mins",
      shortDesc: "Precision therapeutic modalities including IFT, TENS, Ultrasound, and Wax Bath for acute inflammation.",
      highlights: ["IFT & TENS", "Therapeutic Ultrasound", "Paraffin Wax Therapy"],
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "home-visit",
      title: "Home Visit Physiotherapy",
      category: "Neuro",
      duration: "60 Mins",
      shortDesc: "Dedicated doorstep physiotherapy across Coimbatore for senior citizens, post-op patients, and bedridden care.",
      highlights: ["Doorstep Care in Coimbatore", "Geriatric Mobility", "Portable Modalities"],
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=700&q=80"
    }
  ],

  // Interactive Body Map Conditions
  bodyConditions: [
    {
      id: "neck",
      label: "Neck Pain & Spondylosis",
      region: "Cervical Spine (C1–C7)",
      symptoms: "Stiffness when turning the head, radiating pain to shoulders, or desk-work tension headaches.",
      treatment: "Cervical mobilization, IFT pain relief, isometric neck strengthening, and posture correction.",
      recoveryTime: "2 – 4 Weeks"
    },
    {
      id: "shoulder",
      label: "Frozen Shoulder & Rotator Cuff",
      region: "Glenohumeral Joint",
      symptoms: "Difficulty lifting the arm overhead, night pain while sleeping on the side, and joint stiffness.",
      treatment: "Grade III joint mobilization, ultrasound therapy, pendulum exercises, and scapular stabilization.",
      recoveryTime: "3 – 6 Weeks"
    },
    {
      id: "back",
      label: "Lower Back Pain & Sciatica",
      region: "Lumbar Spine (L1–S1)",
      symptoms: "Sharp shooting pain down the leg, lower back spasms after sitting, or disc bulge discomfort.",
      treatment: "Spinal decompression, McKenzie extension protocol, core stabilization, and myofascial release.",
      recoveryTime: "2 – 5 Weeks"
    },
    {
      id: "elbow",
      label: "Tennis / Golfer's Elbow",
      region: "Lateral & Medial Epicondyle",
      symptoms: "Pain when gripping objects, lifting a coffee cup, or twisting the forearm.",
      treatment: "Deep friction massage, ultrasonic therapy, eccentric wrist strengthening, and kinesio taping.",
      recoveryTime: "2 – 3 Weeks"
    },
    {
      id: "knee",
      label: "Knee Arthritis & Ligament Injury",
      region: "Tibiofemoral & Patellar Joint",
      symptoms: "Pain while climbing stairs, knee clicking, swelling, or post-ACL/meniscus instability.",
      treatment: "Quadriceps & VMO strengthening, manual patellar mobilization, IFT, and gait training.",
      recoveryTime: "3 – 6 Weeks"
    },
    {
      id: "ankle",
      label: "Ankle Sprain & Plantar Fasciitis",
      region: "Talocrural Joint & Plantar Arch",
      symptoms: "Sharp heel pain during the first steps in the morning, ankle swelling, or balance instability.",
      treatment: "Plantar fascia release, calf stretching, proprioceptive balance board training, and contrast bath.",
      recoveryTime: "1 – 3 Weeks"
    }
  ],

  // Clinic Gallery Images
  gallery: [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=80"
  ],

  // Patient Testimonials
  testimonials: [
    {
      name: "Karthik Sundaram",
      role: "IT Professional, Saravanampatti",
      rating: 5,
      text: "I had severe cervical spondylitis from long laptop hours. Within 10 sessions at Physio Boss in New Siddhapudhur, my radiating arm pain completely vanished."
    },
    {
      name: "Lakshmi Narayanan",
      role: "Post-Knee Replacement Patient, RS Puram",
      rating: 5,
      text: "Their home visit physiotherapy after my mother's knee replacement surgery was outstanding. She is now walking independently without a walker."
    },
    {
      name: "Arun Prakash",
      role: "State-Level Badminton Player, Gandhipuram",
      rating: 5,
      text: "Recovered from a Grade-2 ankle ligament tear much faster than expected. Their sports rehab and strengthening drills got me back on the court safely."
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "Do I need a doctor's prescription to visit Physio Boss?",
      a: "No, you can book a direct consultation with our senior physiotherapists. If you have existing X-rays, MRI scans, or surgical discharge summaries, please bring them along."
    },
    {
      q: "How long does a typical physiotherapy session last?",
      a: "A standard session takes 45 to 60 minutes, which includes manual therapy, electrotherapy modalities if required, and supervised corrective exercises."
    },
    {
      q: "Do you provide home visit physiotherapy in Coimbatore?",
      a: "Yes! We provide home physiotherapy across New Siddhapudhur, Gandhipuram, RS Puram, Peelamedu, Saibaba Colony, and surrounding Coimbatore areas for post-surgical and elderly patients."
    },
    {
      q: "Is the initial consultation free?",
      a: "Yes, we offer a complimentary initial posture and movement screening to help you understand the root cause of your pain and the recommended recovery plan."
    }
  ]
};