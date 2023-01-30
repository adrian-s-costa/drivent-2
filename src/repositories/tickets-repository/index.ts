import { prisma } from "@/config";
import { Ticket, TicketStatus, TicketType } from "@prisma/client";

async function getAllTickets() {
  return prisma.ticketType.findMany();
}

export async function getTicketByUserId(): Promise<Ticket & { TicketType: TicketType }> {
  return await prisma.ticket.findFirst({
    include: {
      TicketType: true,
    },
  });
}

export async function insertTicket(ticketTypeId: number, enrollmentId: number): Promise<Ticket> {
  return await prisma.ticket.create({
    data: {
      ticketTypeId,
      enrollmentId,
      status: TicketStatus.RESERVED,
    },
  });
}

export async function findTicket(id: number) {
  return await prisma.ticket.findFirst({
    where: {
      id: id,
    },
    include: {
      TicketType: true,
    },
  });
}

export async function updateTicket(id: number) {
  await prisma.ticket.update({
    where: { id },
    data: {
      status: TicketStatus.PAID,
    },
  });
}

export async function findTicketsTypeById(id: number): Promise<TicketType> {
  return await prisma.ticketType.findFirst({
    where: {
      id: id,
    },
  });
}

const ticketRepository = {
  getAllTickets,
  getTicketByUserId,
  insertTicket,
  findTicket,
  findTicketsTypeById,
  updateTicket
};

export default ticketRepository;
