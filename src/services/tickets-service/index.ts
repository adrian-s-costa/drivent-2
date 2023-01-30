import ticketRepository from "@/repositories/tickets-repository"

async function getAllTickets(){
    const tickets = await ticketRepository.getAllTickets();
    return tickets;
}

export async function getTicketsTypes(userId: number) {
    return await ticketRepository.getTicketByUserId(userId);
}

const ticketService = {
    getAllTickets,
    getTicketsTypes
};

export default ticketService;