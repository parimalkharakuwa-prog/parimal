
import React from 'react';
import { 
  FileText, Plane, Monitor, Printer, CreditCard, 
  MapPin, ShieldCheck, Heart, Info, Home, Phone,
  FileBadge, Users, Clock, Languages, LayoutDashboard,
  CheckCircle, Landmark, IdCard, Briefcase, GraduationCap,
  Fingerprint, Baby, ClipboardList, Mountain, FileWarning
} from 'lucide-react';
import { Service, ServiceCategory, SiteSettings } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  mobile: "+91 9823104568",
  email: "Parimalkharakuwa@gmail.com",
  address: "Near Gujarati Vidya Mandir, Kharakuwa, Chhatrapati Sambhajinagar – 431001, Maharashtra, India",
  whatsappLink: "https://wa.me/919823104568",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.28589947844!2d75.32833077524948!3d19.870123581504934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb983c7da9070f%3A0x67341e3305a415a7!2sKharakuwa%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715850000000!5m2!1sen!2sin"
};

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'leave-license',
    nameEn: 'Leave & License Agreement',
    nameMr: 'भाडे करारनामा',
    descriptionEn: 'Official government registered rent agreements for homes and shops.',
    descriptionMr: 'घरे आणि दुकानांसाठी अधिकृत सरकारी नोंदणीकृत भाडे करार.',
    icon: 'Home',
    category: ServiceCategory.LEGAL,
    priority: true,
    ctaTextEn: 'Apply Now',
    ctaTextMr: 'आताच अर्ज करा',
    docsEn: ['Aadhaar Card', 'PAN Card', 'Property Light Bill'],
    docsMr: ['आधार कार्ड', 'पॅन कार्ड', 'मालमत्ता वीज बिल']
  },
  {
    id: 'gazette',
    nameEn: 'Gazette (Name Change)',
    nameMr: 'गॅझेट (नाव बदल)',
    descriptionEn: 'Official government notification for legal name change or correction.',
    descriptionMr: 'कायदेशीर नाव बदलण्यासाठी किंवा दुरुस्तीसाठी अधिकृत सरकारी अधिसूचना.',
    icon: 'FileText',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Apply Now',
    ctaTextMr: 'आताच अर्ज करा',
    docsEn: ['Old Name Proof (Aadhar/Pan/TC/Bond)', 'New Name Proof (Aadhar/Pan/TC/Bond)', 'Minor: Birth Certificate', 'Passport Photo'],
    docsMr: ['जुन्या नावाचा पुरावा (आधार/पॅन/टीसी/बॉन्ड)', 'नवीन नावाचा पुरावा (आधार/पॅन/टीसी/बॉन्ड)', 'अज्ञान असल्यास: जन्म दाखला', 'पासपोर्ट फोटो']
  },
  {
    id: 'food-license',
    nameEn: 'Food License (FSSAI)',
    nameMr: 'अन्न परवाना (FSSAI)',
    descriptionEn: 'Mandatory registration and licensing for all food businesses and vendors.',
    descriptionMr: 'सर्व अन्न व्यवसाय आणि विक्रेत्यांसाठी अनिवार्य नोंदणी आणि परवाना.',
    icon: 'ShieldCheck',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Apply Now',
    ctaTextMr: 'आताच अर्ज करा',
    docsEn: ['Aadhaar Card', 'PAN Card', 'Passport Photo', 'Light Bill', 'Rent Agreement'],
    docsMr: ['आधार कार्ड', 'पॅन कार्ड', 'पासपोर्ट फोटो', 'वीज बिल', 'भाडे करार']
  },
  {
    id: 'gst-registration',
    nameEn: 'GST Registration',
    nameMr: 'जीएसटी नोंदणी',
    descriptionEn: 'Fast and professional GST registration for your business.',
    descriptionMr: 'तुमच्या व्यवसायासाठी जलद आणि व्यावसायिक जीएसटी नोंदणी.',
    icon: 'ClipboardList',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Register Now',
    ctaTextMr: 'नोंदणी करा',
    docsEn: ['Aadhaar Card', 'PAN Card', '1 Passport Photo', 'Light Bill', 'Rent Agreement', 'Google Location'],
    docsMr: ['आधार कार्ड', 'पॅन कार्ड', '१ पासपोर्ट फोटो', 'वीज बिल', 'भाडे करार', 'गुगल लोकेशन']
  },
  {
    id: 'passport',
    nameEn: 'Passport Services',
    nameMr: 'पासपोर्ट सेवा',
    descriptionEn: 'Fresh and renewal passport applications made easy.',
    descriptionMr: 'नवीन आणि नूतनीकरण पासपोर्ट अर्ज सोपे झाले.',
    icon: 'FileBadge',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Enquire',
    ctaTextMr: 'चौकशी करा',
    docsEn: ['Aadhaar Card', 'PAN Card', 'Bank Passbook/Stmt', 'Educational Document'],
    docsMr: ['आधार कार्ड', 'पॅन कार्ड', 'बँक पासबुक/स्टेटमेंट', 'शैक्षणिक कागदपत्रे']
  },
  {
    id: 'pan-card',
    nameEn: 'PAN Card',
    nameMr: 'पॅन कार्ड',
    descriptionEn: 'Apply for a new PAN card or request corrections.',
    descriptionMr: 'नवीन पॅन कार्डसाठी अर्ज करा किंवा दुरुस्तीची विनंती करा.',
    icon: 'IdCard',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Apply Now',
    ctaTextMr: 'आताच अर्ज करा',
    docsEn: ['Aadhaar Card'],
    docsMr: ['आधार कार्ड']
  },
  {
    id: 'shop-act',
    nameEn: 'Shop Act License',
    nameMr: 'शॉप ॲक्ट लायसन्स',
    descriptionEn: 'Register your business legally with the municipal corporation.',
    descriptionMr: 'महानगरपालिकेकडे तुमच्या व्यवसायाची कायदेशीर नोंदणी करा.',
    icon: 'Briefcase',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Get Registered',
    ctaTextMr: 'नोंदणी करा',
    docsEn: ['Aadhaar Card', 'Light Bill', 'Shop Photo', '1 Passport Photo', 'Signature'],
    docsMr: ['आधार कार्ड', 'वीज बिल', 'दुकानाचे फोटो', '१ पासपोर्ट फोटो', 'स्वाक्षरी']
  },
  {
    id: 'scholarship',
    nameEn: 'Scholarship Form',
    nameMr: 'शिष्यवृत्ती अर्ज',
    descriptionEn: 'Apply for various government and school scholarships.',
    descriptionMr: 'विविध सरकारी आणि शालेय शिष्यवृत्तींसाठी अर्ज करा.',
    icon: 'GraduationCap',
    category: ServiceCategory.DIGITAL,
    priority: false,
    ctaTextEn: 'Apply Now',
    ctaTextMr: 'आताच अर्ज करा',
    docsEn: ['Aadhaar Card', 'Bank Passbook', 'SSC Marksheet', 'HSC Marksheet', 'Fees Receipt/Bonafide', 'Caste Certificate', 'Income Certificate', 'Domicile', 'TC', 'Allotment Letter'],
    docsMr: ['आधार कार्ड', 'बँक पासबुक', '१० वी मार्कशीट', '१२ वी मार्कशीट', 'फी पावती/बोनाफाईड', 'जातीचा दाखला', 'उत्पन्नाचा दाखला', 'रहिवासी दाखला', 'टीसी', 'अलॉटमेंट लेटर']
  },
  {
    id: 'voter-id',
    nameEn: 'Voter ID Card',
    nameMr: 'मतदार ओळखपत्र',
    descriptionEn: 'New Voter ID registration and address changes.',
    descriptionMr: 'नवीन मतदार ओळखपत्र नोंदणी आणि पत्ता बदल.',
    icon: 'Fingerprint',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Register Now',
    ctaTextMr: 'नोंदणी करा',
    docsEn: ['Aadhaar Card', 'Passport Photo', 'Family Voter ID'],
    docsMr: ['आधार कार्ड', 'पासपोर्ट फोटो', 'कुटुंबातील सदस्याचे मतदान कार्ड']
  },
  {
    id: 'birth-certificate',
    nameEn: 'Birth Certificate',
    nameMr: 'जन्म दाखला',
    descriptionEn: 'Official government birth certificate registration assistance.',
    descriptionMr: 'अधिकृत सरकारी जन्म दाखला नोंदणीसाठी मदत.',
    icon: 'Baby',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Apply Now',
    ctaTextMr: 'आताच अर्ज करा',
    docsEn: ['Mother Aadhaar Card', 'Father Aadhaar Card', 'Hospital Receipt'],
    docsMr: ['आईचे आधार कार्ड', 'वडिलांचे आधार कार्ड', 'हॉस्पिटल पावती']
  },
  {
    id: 'death-certificate',
    nameEn: 'Death Certificate',
    nameMr: 'मृत्यू दाखला',
    descriptionEn: 'Assistance for official death certificate registration.',
    descriptionMr: 'अधिकृत मृत्यू दाखला नोंदणीसाठी मदत.',
    icon: 'FileText',
    category: ServiceCategory.LEGAL,
    priority: false,
    ctaTextEn: 'Apply Now',
    ctaTextMr: 'आताच अर्ज करा',
    docsEn: ['Deceased Aadhaar Card', 'Applicant Aadhaar Card', 'Hospital Certificate', 'Smashanbhumi Receipt'],
    docsMr: ['मृत व्यक्तीचे आधार कार्ड', 'अर्जदाराचे आधार कार्ड', 'हॉस्पिटल प्रमाणपत्र', 'स्मशानभूमी पावती']
  },
  {
    id: 'amarnath-darshan',
    nameEn: 'Amarnath Darshan Booking',
    nameMr: 'अमरनाथ दर्शन बुकिंग',
    descriptionEn: 'Hassle-free registration and medical certificate assistance for Amarnath Yatra.',
    descriptionMr: 'अमरनाथ यात्रेसाठी त्रासमुक्त नोंदणी आणि वैद्यकीय प्रमाणपत्र सहाय्य.',
    icon: 'Mountain',
    category: ServiceCategory.TRAVEL,
    priority: false,
    ctaTextEn: 'Book Now',
    ctaTextMr: 'बुकिंग करा',
    docsEn: ['Medical Certificate', 'Aadhaar Card', 'Passport Photo', 'Filled Form'],
    docsMr: ['वैद्यकीय प्रमाणपत्र', 'आधार कार्ड', 'पासपोर्ट फोटो', 'भरलेला अर्ज']
  },
  {
    id: 'flight-booking',
    nameEn: 'Flight Ticket Booking',
    nameMr: 'विमान तिकीट बुकिंग',
    descriptionEn: 'Domestics and International flight bookings at best rates.',
    descriptionMr: 'घरगुती आणि आंतरराष्ट्रीय विमान बुकिंग सर्वोत्तम दरात.',
    icon: 'Plane',
    category: ServiceCategory.TRAVEL,
    priority: false,
    ctaTextEn: 'Book Now',
    ctaTextMr: 'बुकिंग करा',
    docsEn: ['Aadhaar Card', 'Passport Copy (Intl)'],
    docsMr: ['आधार कार्ड', 'पासपोर्ट प्रत (आंतरराष्ट्रीय)']
  },
  {
    id: 'balaji-darshan',
    nameEn: 'Balaji Darshan Booking',
    nameMr: 'बालाजी दर्शन बुकिंग',
    descriptionEn: 'Confirmed slots for Tirupati Balaji Darshan.',
    descriptionMr: 'तिरुपती बालाजी दर्शनासाठी निश्चित स्लॉट.',
    icon: 'Landmark',
    category: ServiceCategory.TRAVEL,
    priority: false,
    ctaTextEn: 'Book Slots',
    ctaTextMr: 'स्लॉट बुक करा',
    docsEn: ['Aadhaar Card'],
    docsMr: ['आधार कार्ड']
  },
  {
    id: 'csc-services',
    nameEn: 'CSC Services',
    nameMr: 'सीएससी सेवा',
    descriptionEn: 'All common service center facilities for citizens.',
    descriptionMr: 'नागरिकांसाठी सर्व सीएससी सुविधा.',
    icon: 'Monitor',
    category: ServiceCategory.DIGITAL,
    priority: false,
    ctaTextEn: 'View Services',
    ctaTextMr: 'सेवा पहा',
    docsEn: ['Aadhaar Card'],
    docsMr: ['आधार कार्ड']
  }
];

export const ICON_MAP: Record<string, any> = {
  Home, FileBadge, IdCard, Briefcase, Plane, Landmark, Monitor, Printer, FileText, CreditCard, GraduationCap, Fingerprint, Baby, ClipboardList, Mountain, FileWarning, ShieldCheck
};
