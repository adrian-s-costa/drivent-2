import { prisma } from "@/config";
import { Ticket, TicketStatus, TicketType } from "@prisma/client";

async function getAllTickets(){
    return prisma.ticketType.findMany();
}

export async function getTicketByUserId(userId:number): Promise<Ticket & { TicketType: TicketType }> {
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

export async function findTicket(id: number){
  return await prisma.ticket.findFirst({
    where: {
      id: id,
    },
    include: {
      TicketType: true,
    },
  });
}

const ticketRepository = {
    getAllTickets,
    getTicketByUserId,
    insertTicket,
    findTicket
};

export default ticketRepository;