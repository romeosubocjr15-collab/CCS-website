// Names, titles and assignments are exactly as published at https://ccs.cpu.edu.ph/faculty-and-staff/
// Specializations are NOT published there, so none are shown (no fabricated data).
const UP = 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/'
const p = (id, name, title, group, programs, assignment, file) => ({ id, name, title, group, programs, assignment, img: UP + file })

export const faculty = [
  p('quijano', 'Ma. Christina A. Quijano, MSCS', 'Dean', 'leadership', [], 'College Dean', 'quijano-e1637132499305.png'),
  p('balontong', 'Rea P. Balontong, MBA', 'Department Head (IT & IS)', 'leadership', ['bsit'], 'Department Head (IT & IS)', 'balontong-754x1024.jpg'),
  p('parreno', 'Marjee Rose B. Parreño, MSCS, MBA', 'Program Coordinator', 'leadership', ['bscs', 'bsdmia'], 'Program Coordinator (BSCS, BSDMIA, and MSCS)', 'parreno-754x1024.jpg'),
  p('cantel', 'Ana Mae B. Cantel, MLIS', 'Program Coordinator', 'leadership', ['blis'], 'Program Coordinator (BLIS and MLIS)', 'cantel-754x1024.jpg'),
  p('pajar', 'Lennon D. Pajar', 'Computer Laboratory Coordinator', 'leadership', [], 'Computer Laboratory Coordinator', 'pajar-754x1024.jpg'),
  p('beldia', 'Leo Paulo B. Beldia', 'Faculty', 'faculty', ['bsit'], 'BSIT and BSIS Program', 'beldia-754x1024.jpg'),
  p('cambronero', 'Pedro Peter Rhys B. Cambronero, MSCS', 'Faculty', 'faculty', ['bscs'], 'BSCS Program', 'cambronero-754x1024.jpg'),
  p('dignadice', 'Lesley Joy L. Dignadice, MBA', 'Faculty', 'faculty', ['bsit'], 'BSIT and BSIS Program', 'dignadice-1-754x1024.jpg'),
  p('eregia', 'Rodolfo C. Eregia, Jr.', 'Faculty', 'faculty', ['bsit'], 'BSIT and BSIS Program', 'eregia-754x1024.jpg'),
  p('jardeleza', 'Donie S. Jardeleza, MSCS', 'Faculty', 'faculty', ['bsit'], 'BSIT and BSIS Program', 'jardleza-754x1024.jpg'),
  p('montano', 'Antonio M. Montaño, Jr.', 'Faculty', 'faculty', ['bsit'], 'BSIT and BSIS Program', 'montano-754x1024.jpg'),
  p('ojacastro', 'Rose Leah Joy A. Ojacastro, MSCS', 'Faculty', 'faculty', ['bsit'], 'BSIT and BSIS Program', 'ojacastro-754x1024.jpg'),
  p('sapul', 'Ma. Sheila C. Sapul, Ph.D.', 'Faculty', 'faculty', ['bscs'], 'BSCS Program', 'sapul-754x1024.jpg'),
  p('castano', 'Chrislyn C. Castaño', 'Secretary', 'staff', [], 'Staff', 'castano-754x1024.jpg'),
  p('taasan', 'A.M.P. Latter P. Taasan', 'Computer Laboratory Technician', 'staff', [], 'Staff', 'taasan-754x1024.jpg'),
  p('ador', 'Chriselda Elaine Ador', 'Guidance Counselor', 'staff', [], 'Staff', 'ador-754x1024.jpg'),
  p('rivera', 'Donna May Rivera', 'Library Liaison Officer', 'staff', [], 'Staff', 'rivera-754x1024.png')
]
