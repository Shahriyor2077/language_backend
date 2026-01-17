import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type NotificationModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationPayload>;
export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type NotificationMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    lessonId: string | null;
    message: string | null;
    sendAt: Date | null;
    isSend: boolean | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NotificationMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    lessonId: string | null;
    message: string | null;
    sendAt: Date | null;
    isSend: boolean | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NotificationCountAggregateOutputType = {
    id: number;
    studentId: number;
    lessonId: number;
    message: number;
    sendAt: number;
    isSend: number;
    isDeleted: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type NotificationMinAggregateInputType = {
    id?: true;
    studentId?: true;
    lessonId?: true;
    message?: true;
    sendAt?: true;
    isSend?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NotificationMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    lessonId?: true;
    message?: true;
    sendAt?: true;
    isSend?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NotificationCountAggregateInputType = {
    id?: true;
    studentId?: true;
    lessonId?: true;
    message?: true;
    sendAt?: true;
    isSend?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type NotificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationCountAggregateInputType;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotification[P]> : Prisma.GetScalarType<T[P], AggregateNotification[P]>;
};
export type NotificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithAggregationInput | Prisma.NotificationOrderByWithAggregationInput[];
    by: Prisma.NotificationScalarFieldEnum[] | Prisma.NotificationScalarFieldEnum;
    having?: Prisma.NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type NotificationGroupByOutputType = {
    id: string;
    studentId: string;
    lessonId: string;
    message: string;
    sendAt: Date;
    isSend: boolean;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]>;
}>>;
export type NotificationWhereInput = {
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    id?: Prisma.StringFilter<"Notification"> | string;
    studentId?: Prisma.StringFilter<"Notification"> | string;
    lessonId?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    sendAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    isSend?: Prisma.BoolFilter<"Notification"> | boolean;
    isDeleted?: Prisma.BoolFilter<"Notification"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
};
export type NotificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    sendAt?: Prisma.SortOrder;
    isSend?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    lesson?: Prisma.LessonOrderByWithRelationInput;
};
export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    lessonId?: string;
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    studentId?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    sendAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    isSend?: Prisma.BoolFilter<"Notification"> | boolean;
    isDeleted?: Prisma.BoolFilter<"Notification"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
}, "id" | "lessonId">;
export type NotificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    sendAt?: Prisma.SortOrder;
    isSend?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.NotificationCountOrderByAggregateInput;
    _max?: Prisma.NotificationMaxOrderByAggregateInput;
    _min?: Prisma.NotificationMinOrderByAggregateInput;
};
export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    lessonId?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    message?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    sendAt?: Prisma.DateTimeWithAggregatesFilter<"Notification"> | Date | string;
    isSend?: Prisma.BoolWithAggregatesFilter<"Notification"> | boolean;
    isDeleted?: Prisma.BoolWithAggregatesFilter<"Notification"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Notification"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Notification"> | Date | string;
};
export type NotificationCreateInput = {
    id?: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutNotificationsInput;
    lesson: Prisma.LessonCreateNestedOneWithoutNotificationInput;
};
export type NotificationUncheckedCreateInput = {
    id?: string;
    studentId: string;
    lessonId: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutNotificationsNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutNotificationNestedInput;
};
export type NotificationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyInput = {
    id?: string;
    studentId: string;
    lessonId: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationListRelationFilter = {
    every?: Prisma.NotificationWhereInput;
    some?: Prisma.NotificationWhereInput;
    none?: Prisma.NotificationWhereInput;
};
export type NotificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationNullableScalarRelationFilter = {
    is?: Prisma.NotificationWhereInput | null;
    isNot?: Prisma.NotificationWhereInput | null;
};
export type NotificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    sendAt?: Prisma.SortOrder;
    isSend?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    sendAt?: Prisma.SortOrder;
    isSend?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    sendAt?: Prisma.SortOrder;
    isSend?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutStudentInput | Prisma.NotificationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput> | Prisma.NotificationCreateWithoutStudentInput[] | Prisma.NotificationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutStudentInput | Prisma.NotificationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.NotificationCreateManyStudentInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput | Prisma.NotificationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutStudentInput | Prisma.NotificationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateNestedOneWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutLessonInput, Prisma.NotificationUncheckedCreateWithoutLessonInput>;
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutLessonInput;
    connect?: Prisma.NotificationWhereUniqueInput;
};
export type NotificationUncheckedCreateNestedOneWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutLessonInput, Prisma.NotificationUncheckedCreateWithoutLessonInput>;
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutLessonInput;
    connect?: Prisma.NotificationWhereUniqueInput;
};
export type NotificationUpdateOneWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutLessonInput, Prisma.NotificationUncheckedCreateWithoutLessonInput>;
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutLessonInput;
    upsert?: Prisma.NotificationUpsertWithoutLessonInput;
    disconnect?: Prisma.NotificationWhereInput | boolean;
    delete?: Prisma.NotificationWhereInput | boolean;
    connect?: Prisma.NotificationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotificationUpdateToOneWithWhereWithoutLessonInput, Prisma.NotificationUpdateWithoutLessonInput>, Prisma.NotificationUncheckedUpdateWithoutLessonInput>;
};
export type NotificationUncheckedUpdateOneWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutLessonInput, Prisma.NotificationUncheckedCreateWithoutLessonInput>;
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutLessonInput;
    upsert?: Prisma.NotificationUpsertWithoutLessonInput;
    disconnect?: Prisma.NotificationWhereInput | boolean;
    delete?: Prisma.NotificationWhereInput | boolean;
    connect?: Prisma.NotificationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotificationUpdateToOneWithWhereWithoutLessonInput, Prisma.NotificationUpdateWithoutLessonInput>, Prisma.NotificationUncheckedUpdateWithoutLessonInput>;
};
export type NotificationCreateWithoutStudentInput = {
    id?: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutNotificationInput;
};
export type NotificationUncheckedCreateWithoutStudentInput = {
    id?: string;
    lessonId: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationCreateOrConnectWithoutStudentInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput>;
};
export type NotificationCreateManyStudentInputEnvelope = {
    data: Prisma.NotificationCreateManyStudentInput | Prisma.NotificationCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutStudentInput, Prisma.NotificationUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutStudentInput, Prisma.NotificationUncheckedCreateWithoutStudentInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutStudentInput, Prisma.NotificationUncheckedUpdateWithoutStudentInput>;
};
export type NotificationUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutStudentInput>;
};
export type NotificationScalarWhereInput = {
    AND?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    OR?: Prisma.NotificationScalarWhereInput[];
    NOT?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    id?: Prisma.StringFilter<"Notification"> | string;
    studentId?: Prisma.StringFilter<"Notification"> | string;
    lessonId?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    sendAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    isSend?: Prisma.BoolFilter<"Notification"> | boolean;
    isDeleted?: Prisma.BoolFilter<"Notification"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
};
export type NotificationCreateWithoutLessonInput = {
    id?: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutLessonInput = {
    id?: string;
    studentId: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationCreateOrConnectWithoutLessonInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutLessonInput, Prisma.NotificationUncheckedCreateWithoutLessonInput>;
};
export type NotificationUpsertWithoutLessonInput = {
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutLessonInput, Prisma.NotificationUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutLessonInput, Prisma.NotificationUncheckedCreateWithoutLessonInput>;
    where?: Prisma.NotificationWhereInput;
};
export type NotificationUpdateToOneWithWhereWithoutLessonInput = {
    where?: Prisma.NotificationWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutLessonInput, Prisma.NotificationUncheckedUpdateWithoutLessonInput>;
};
export type NotificationUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyStudentInput = {
    id?: string;
    lessonId: string;
    message: string;
    sendAt: Date | string;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutNotificationNestedInput;
};
export type NotificationUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    sendAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isSend?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    lessonId?: boolean;
    message?: boolean;
    sendAt?: boolean;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    lessonId?: boolean;
    message?: boolean;
    sendAt?: boolean;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    lessonId?: boolean;
    message?: boolean;
    sendAt?: boolean;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    lessonId?: boolean;
    message?: boolean;
    sendAt?: boolean;
    isSend?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type NotificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "lessonId" | "message" | "sendAt" | "isSend" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>;
export type NotificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type NotificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type $NotificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notification";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        lesson: Prisma.$LessonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        lessonId: string;
        message: string;
        sendAt: Date;
        isSend: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["notification"]>;
    composites: {};
};
export type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationPayload, S>;
export type NotificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationCountAggregateInputType | true;
};
export interface NotificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notification'];
        meta: {
            name: 'Notification';
        };
    };
    findUnique<T extends NotificationFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationCreateArgs>(args: Prisma.SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationDeleteArgs>(args: Prisma.SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationUpdateArgs>(args: Prisma.SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationUpsertArgs>(args: Prisma.SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationCountArgs>(args?: Prisma.Subset<T, NotificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationCountAggregateOutputType> : number>;
    aggregate<T extends NotificationAggregateArgs>(args: Prisma.Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;
    groupBy<T extends NotificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationFieldRefs;
}
export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationFieldRefs {
    readonly id: Prisma.FieldRef<"Notification", 'String'>;
    readonly studentId: Prisma.FieldRef<"Notification", 'String'>;
    readonly lessonId: Prisma.FieldRef<"Notification", 'String'>;
    readonly message: Prisma.FieldRef<"Notification", 'String'>;
    readonly sendAt: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly isSend: Prisma.FieldRef<"Notification", 'Boolean'>;
    readonly isDeleted: Prisma.FieldRef<"Notification", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Notification", 'DateTime'>;
}
export type NotificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type NotificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type NotificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type NotificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
};
export type NotificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type NotificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
    include?: Prisma.NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
};
export type NotificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type NotificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
};
export {};
