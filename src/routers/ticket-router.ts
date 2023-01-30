import { getTickets, getTicketsById, postTicket } from "@/controllers/tickets-controller";
import { authenticateToken, validateBody } from "@/middlewares";
import { createTicketSchema } from "@/schemas/tickets-schemas";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter
.all("/*", authenticateToken)
.get("/types", getTickets)
.get("/", getTicketsById)
.post("/", validateBody(createTicketSchema), postTicket)

export { ticketsRouter };