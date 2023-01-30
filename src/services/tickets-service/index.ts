import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/tickets-repository";
import { Ticket, TicketType } from "@prisma/client";
import { notFoundEnrollmentError } from "./errors";

async function getAllTickets(): Promise<TicketType[]> {
  const tickets = await ticketRepository.getAllTickets();
  return tickets;
}

export async function getTicketsTypes(): Promise<Ticket & { TicketType: TicketType }> {
  return await ticketRepository.getTicketByUserId();
}

export async function postTicketService(
    userId: number,
    ticketTypeId: number,
  ): Promise<
    Ticket & {
      TicketType: TicketType;
    }
  > {
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
