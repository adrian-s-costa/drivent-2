import { prisma } from "@/config";
import { Ticket, TicketType } from "@prisma/client";

async function getAllTickets(){
    return prisma.ticketType.findMany();
}

export async function getTicketByUserId(): Promise<Ticket & { TicketType: TicketType }> {
    return await prisma.ticket.findFirst({
        include: {
            TicketType: true,
        },
    });
}

const ticketRepository = {
    getAllTickets,
    getTicketByUserId
};

export default ticketRepository;