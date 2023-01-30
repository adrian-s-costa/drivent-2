import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/tickets-repository";
import { notFoundEnrollmentError } from "./errors";

async function getAllTickets() {
  const tickets = await ticketRepository.getAllTickets();
  return tickets;
}

export async function getTicketsTypes() {
  return await ticketRepository.getTicketByUserId();
}

export async function postTicketService(userId: number, ticketTypeId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundEnrollmentError();
  }
  const insertedTicket = await ticketRepository.insertTicket(ticketTypeId, enrollment.id);
  const insertedTicketData = await ticketRepository.findTicket(insertedTicket.id);
  return insertedTicketData;
}

const ticketService = {
  getAllTickets,
  getTicketsTypes,
  postTicketService
};

export default ticketService;
